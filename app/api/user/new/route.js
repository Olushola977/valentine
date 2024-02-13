
import Request from "@/models/request";
import { connectToDB } from "@/utils/database";

// Define a function to handle user information insertion/update
export const POST = async (email, partnerName, successMessage, failureMessage) => {
  try {
    // Connect to the MongoDB database
    await connectToDB()

    // Define the query to find existing user info by email
    const filter = email;

    // Define the update operation
    const update = {
      $set: {
        email,
        partnerName,
        successMessage,
        failureMessage
      }
    };

    // Set the upsert option to true to insert a new document if no match is found
    const options = { upsert: true };

    // Perform the findOneAndUpdate operation
    Request.findOneAndUpdate(filter, update, options);

    // Return success message or handle as needed
    return { success: true, message: 'User information saved successfully' };
  } catch (error) {
    // Handle errors
    console.error('Error saving user information:', error);
    return { success: false, message: 'Error saving user information' };
  }
}
