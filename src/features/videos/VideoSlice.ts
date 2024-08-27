import { Result, Video, VideoPayload } from "../../types/Videos";
import { apiSlice } from "../api/apiSlice";
import { Genres as GenresResults } from "../../types/Genres";
import { Results as CastMembersResults } from "../../types/CastMembers";
const endpointUrl = "/videos";

export const initialState: Video = {
  id: "",
  title: "",
  rating: "",
  genres: [],
  duration: "0",
  opened: false,
  deleted_at: "",
  created_at: "",
  updated_at: "",
  categories: [],
  description: "",
  year_launched: "0",
  cast_members: [],
  thumb_file_url: "",
  video_file_url: "",
  banner_file_url: "",
  trailer_file_url: "",
};

function createVideo(video: VideoPayload) {
  return {
    url: endpointUrl,
    method: "POST",
    body: video,
  };
}

function getAllGenres() {
  return `genres?all=true`;
}

function getAllCastMembers() {
  return `cast_members?all=true`;
}

function getVideo({ id }: { id: string }) {
  return `${endpointUrl}/${id}`;
}

function updateVideo(video: VideoPayload) {
  return {
    url: `${endpointUrl}/${video.id}`,
    method: "PUT",
    body: video,
  };
}

export const videosSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    createVideo: mutation<Result, VideoPayload>({
      query: createVideo,
      invalidatesTags: ["Videos"],
    }),

    getAllGenres: query<GenresResults, void>({
      query: getAllGenres,
      providesTags: ["Genres"],
    }),

    getAllCastMembers: query<CastMembersResults, void>({
      query: getAllCastMembers,
      providesTags: ["CastMembers"],
    }),

    getVideo: query<Result, { id: string }>({
      query: getVideo,
      providesTags: ["Videos"],
    }),

    updateVideo: mutation<Result, VideoPayload>({
      query: updateVideo,
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetAllGenresQuery,
  useGetAllCastMembersQuery,
  useCreateVideoMutation,
  useGetVideoQuery,
  useUpdateVideoMutation,
} = videosSlice;
