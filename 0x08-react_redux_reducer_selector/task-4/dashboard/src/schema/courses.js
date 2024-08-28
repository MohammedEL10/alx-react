import { normalize, schema } from "normalizr";

const coursesShema = new schema.Entity("courses");

export const coursesNormalizer = (data) => {
  return normalize(data, [coursesShema]);
};
