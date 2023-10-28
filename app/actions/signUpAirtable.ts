"use server"; // set it as a server-side function
import Airtable from "airtable";
import process from "process";

// use your own Airtable API key and base ID
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_TOKEN,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID as string);

export const signUpAirtable = async (email: string) => {
  const newRecords = await base(
    process.env.AIRTABLE_TABLE_NAME as string
  ).create([
    {
      fields: {
        Email: email,
      },
    },
  ]);
  // an array of records that were created
  if (!newRecords)
    return { level: "error", error: "Error creating Subscription" };

  const newRecord = newRecords[0];
  return { success: "mail subscribed", data: newRecord.fields };
};
