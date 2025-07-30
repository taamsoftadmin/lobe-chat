'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useAiInfraStore } from '@/store/aiInfra';
import { aiProviderSelectors } from '@/store/aiInfra/selectors';

interface UrlParamsHandlerProps {
  providerId: string;
}

/**
 * Component to handle URL parameters for pre-filling provider configuration
 * Supports parameters like: ?apiKey=sk-xxx&baseURL=https://api.example.com
 */
const UrlParamsHandler = ({ providerId }: UrlParamsHandlerProps) => {
  const searchParams = useSearchParams();
  const [updateAiProviderConfig, isLoading] = useAiInfraStore((s) => [
    s.updateAiProviderConfig,
    aiProviderSelectors.isAiProviderConfigLoading(providerId)(s),
  ]);

  useEffect(() => {
    // Don't process if still loading
    if (isLoading) return;

    const apiKey = searchParams.get('apiKey');
    const baseURL = searchParams.get('baseURL');
    const apiVersion = searchParams.get('apiVersion');

    // Only proceed if we have parameters to set
    if (!apiKey && !baseURL && !apiVersion) return;

    // Build the update object
    const updateData: any = {};

    // Handle keyVaults (API credentials)
    if (apiKey || baseURL) {
      updateData.keyVaults = {};
      if (apiKey) {
        updateData.keyVaults.apiKey = apiKey;
      }
      if (baseURL) {
        updateData.keyVaults.baseURL = baseURL;
      }
      if (apiVersion) {
        updateData.keyVaults.apiVersion = apiVersion;
      }
    }

    // Update the provider configuration
    if (Object.keys(updateData).length > 0) {
      updateAiProviderConfig(providerId, updateData);

      // Clean up URL parameters after setting them
      const currentUrl = new URL(window.location.href);
      const params = currentUrl.searchParams;

      // Remove the parameters we processed
      params.delete('apiKey');
      params.delete('baseURL');
      params.delete('apiVersion');

      // Update URL without reloading the page
      const newUrl = `${currentUrl.pathname}${params.toString() ? '?' + params.toString() : ''}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [searchParams, providerId, updateAiProviderConfig, isLoading]);

  return null;
};

export default UrlParamsHandler;
