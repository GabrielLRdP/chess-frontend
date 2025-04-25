export const useOnGameStartedCallBack = () => {
  return <StartGameData>(data: StartGameData) => {
    console.log(data);
  };
};
