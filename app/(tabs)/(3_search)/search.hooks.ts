import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import apiTopaz from '../../../services/apiTopaz';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryInstruments = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => apiTopaz.searchByTicker(searchQuery),
    enabled: searchQuery.length > 0,
    staleTime: 1000 * 60, // Cache for 1 minute
  });

  return {
    searchQuery,
    setSearchQuery,
    isLoading: searchQueryInstruments.isLoading,
    isError: searchQueryInstruments.isError,
    results: searchQueryInstruments.data,
  };
};
