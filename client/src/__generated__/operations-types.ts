import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Invoice = {
  __typename?: 'Invoice';
  company: Scalars['String'];
  createdAt: Scalars['String'];
  dueAt: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  lineItems: Array<LineItem>;
};

export type LineItem = {
  __typename?: 'LineItem';
  description: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  invoice: Invoice;
};

export type GetInvoiceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInvoiceQuery = { __typename?: 'Query', invoice: { __typename?: 'Invoice', id: string, email: string, fullName: string, company: string, createdAt: string, dueAt: string, lineItems: Array<{ __typename?: 'LineItem', description: string, price: number }> } };


export const GetInvoiceDocument = `
    query GetInvoice {
  invoice {
    id
    email
    fullName
    company
    createdAt
    dueAt
    lineItems {
      description
      price
    }
  }
}
    `;
export const useGetInvoiceQuery = <
      TData = GetInvoiceQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetInvoiceQueryVariables,
      options?: UseQueryOptions<GetInvoiceQuery, TError, TData>
    ) =>
    useQuery<GetInvoiceQuery, TError, TData>(
      variables === undefined ? ['GetInvoice'] : ['GetInvoice', variables],
      fetcher<GetInvoiceQuery, GetInvoiceQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetInvoiceDocument, variables),
      options
    );