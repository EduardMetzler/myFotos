

export const IMAGE_SEND = "IMAGE_SEND";
export const USER_DATA_LOADING = "USER_DATA_LOADING";



export const imageSend = (data:any) => ({
    type: IMAGE_SEND,
    payload: {data} ,
  });

  export const userDataLoading = () => ({
    type: USER_DATA_LOADING,
    payload: {} ,
  });
