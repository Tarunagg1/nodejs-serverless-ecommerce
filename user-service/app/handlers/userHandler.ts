import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";

export const Signup = middy((event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "response form signup"
        })
    }
})