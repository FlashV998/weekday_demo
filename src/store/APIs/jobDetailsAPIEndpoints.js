import { sampleData } from "./sampleJson";

export const getAllJobDetailsData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sampleData)
        }, 2000);  // adding a timer to imitate an API, not rewuired though
    })
}