import {
    observable,
    computed,
    autorun,
    action,
} from "mobx";

export class AppState {
    @observable counter = 0;
    @observable name = 'Leilei';

    @computed get msg() {
        return `${this.name} say count is ${this.counter}`
    }

    @action add() {
        this.counter += 1;
    }
    @action changeName(name){
        this.name=name;
    }
}

const appState = new AppState();
export default appState;