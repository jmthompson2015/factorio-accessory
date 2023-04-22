import * as R from "../node_modules/ramda/es/index.js";

class ResourceKeyVisitor {
	constructor(
		recipeFunction,
		resourceFunction,
		isBusStop = false,
		isRawStop = false
	) {
		this._recipeFunction = recipeFunction;
		this._resourceFunction = resourceFunction;
		this._isBusStop = isBusStop;
		this._isRawStop = isRawStop;
		this._result = [];
	}

	get recipeFunction() {
		return this._recipeFunction;
	}

	get resourceFunction() {
		return this._resourceFunction;
	}

	get result() {
		return this._result;
	}

	isStop(resourceKey, isBusStop, isRawStop) {
		return (
			(isBusStop === true && this._resourceFunction.isBus(resourceKey)) ||
			(isRawStop === true && this._resourceFunction.isRaw(resourceKey))
		);
	}

	visit(recipeKey) {
		const visitor = this;
		const inputKeys = this._recipeFunction.inputKeys(recipeKey);

		if (inputKeys) {
			const forEachFunction1 = (resourceKey) => {
				this._result = R.uniq(R.append(resourceKey, this._result));

				if (
					!this.isStop(resourceKey, this._isBusStop, this._isRawStop)
				) {
					const recipeKeys2 =
						this._recipeFunction.findByOutput(resourceKey);
					const forEachFunction2 = (recipeKey2) => {
						this._recipeFunction.accept(recipeKey2, visitor);
					};

					R.forEach(forEachFunction2, recipeKeys2);
				}
			};

			R.forEach(forEachFunction1, inputKeys);
		}
	}
}

export default ResourceKeyVisitor;
