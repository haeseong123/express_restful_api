import { DependencyNames } from "./dependencyNames";

export class DIContainer {
    constructor(private dependencies: Map<DependencyNames, any>) { }

    register = <T>(key: DependencyNames, value: T) => {
        this.dependencies.set(key, value);
    }

    resolve = <T>(key: DependencyNames): T => {
        if (this.dependencies.has(key)) {
            return this.dependencies.get(key) as T;
        }

        throw new Error(`Dependency '${key}' not found in the container.`);
    }
}