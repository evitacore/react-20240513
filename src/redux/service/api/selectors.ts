interface Entity {
  id: string;
}

interface Result<T, ExtraFields = {}> {
  data?: T[];
  extraFields?: ExtraFields;
}

interface SelectedResult<T, ExtraFields = {}> {
  data?: T;
  extraFields?: ExtraFields;
}

export const selectEntityFromResult =
  <T extends Entity, ExtraFields = {}>(entityId: string) =>
  (result: Result<T, ExtraFields>): SelectedResult<T, ExtraFields> => ({
    ...result,
    data: result.data?.find(({ id }) => id === entityId),
  });
