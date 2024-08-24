import { CastMember } from "./CastMembers";
import { Category } from "./Category";
import { Genre } from "./Genres";

export type FileObject = {
  name: string;
  file: File;
};


export interface Video {
  id: string;
  title: string;
  description: string;
  year_launched: string;
  opened: boolean;
  rating: string;
  duration: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
  genres?: Genre[];
  categories?: Category[];
  cast_members?: CastMember[];
  thumb_file_url: string;
  banner_file_url: string;
  trailer_file_url: string;
  video_file_url: string;
}
