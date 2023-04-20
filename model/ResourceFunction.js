import * as R from "ramda";

class ResourceFunction {
	constructor(myResources) {
		this._myResources = myResources;
	}

	get myResources() {
		return this._myResources;
	}

	isBus(resourceKey) {
		const resource = this.resource(resourceKey);
		return resource.clientProps
			? resource.clientProps.isBus
			: resource.isBus || false;
	}

	isMap(resourceKey) {
		const resource = this.resource(resourceKey);
		return resource.clientProps
			? resource.clientProps.isMap
			: resource.isMap || false;
	}

	isRaw(resourceKey) {
		const resource = this.resource(resourceKey);
		return resource.clientProps
			? resource.clientProps.isRaw
			: resource.isRaw || false;
	}

	resource(resourceKey) {
		const answer = this._myResources[resourceKey];

		if (R.isNil(answer)) {
			console.error(`Missing resource for key = :${resourceKey}:`);
		}

		return answer;
	}
}

export default ResourceFunction;
