import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { apiSlice } from "../api/apiSlice";
import {
  CastMember,
  CastMemberParams,
  Result,
  Results,
} from "../../types/CastMembers";

const endpointUrl: string = "/cast_members";

export const initialState: CastMember = {
  id: "",
  name: "",
  type: 0,
  created_at: "",
  updated_at: "",
  deleted_at: null,
};

function parseQueryParams(params: CastMemberParams) {
  return null;
}

export const castMembersSlice = apiSlice.injectEndpoints({});
