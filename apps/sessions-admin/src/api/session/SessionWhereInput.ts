import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SessionWhereInput = {
  createdBy?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
