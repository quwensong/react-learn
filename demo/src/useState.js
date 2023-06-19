let isMount = false; 

let workInProgressHook = null; 
const fiberNode = { 
  staticNode: App, 
  mermorizedState: null,
}
export default function(initailState) {
  let hookEnv = { 
    mermorizedState: initailState, 
    next: null, 
  }
  if (!isMount) {
    if (fiberNode.mermorizedState === null) {
      fiberNode.mermorizedState = hookEnv;

    } else {
      fiberNode.mermorizedState.next = hookEnv
    }

    workInProgressHook = hookEnv;
    isMount = true;
  } else {
    hookEnv = workInProgressHook; 
    workInProgressHook = workInProgressHook.next; 
  }
  let baseState = hookEnv.mermorizedState; 

  return [baseState, ?];
}