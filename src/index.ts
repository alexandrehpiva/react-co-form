import {
  CoFormProps as CoFormPropsAlias,
  CoFormResp as CoFormRespAlias,
} from './types';

/**
 * Types
 */
export type CoFormProps<T> = CoFormPropsAlias<T>;
export type CoFormResp<T> = CoFormRespAlias<T>;

/**
 * Hooks
 */
export { default as useCoForm } from './hooks/useCoForm';
