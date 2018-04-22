import AppStateClass from './app-state';

export const AppState=AppStateClass;
export default {
    AppState,
}
export const createStoreMap=()=>{ //这里专门为服务端渲染使用
    return{
        appState:new AppState()
    }
};