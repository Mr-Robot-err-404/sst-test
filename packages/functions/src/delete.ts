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

  await dynamoDb.delete(params)

  return JSON.stringify({ status: true })
})