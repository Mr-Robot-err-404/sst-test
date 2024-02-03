import { Table } from "sst/node/table";
import handler from "@mailing-list/core/handler";
import dynamoDb from "@mailing-list/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Notes.tableName,
    Key: {
      userId: "123",
      noteId: event?.pathParameters?.id,
    },
  }
  
  const result = await dynamoDb.get(params)

  if (!result.Item) {
    throw new Error("Item not found.")
  }

  return JSON.stringify(result.Item)
})