import { Action } from "@reduxjs/toolkit";

type RequestType = {
  status?: string;
  error?: string;
};

interface Meta {
  requestId: string;
}

export interface PendingAction extends Action {
  meta: Meta;
}

export interface RejectedAction extends Action {
  meta: Meta;
  error: string;
}

export interface FulfilledAction extends Action {
  meta: Meta;
}

export type RequestState = Record<string, RequestType>;
