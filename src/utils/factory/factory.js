class Factory {
    constructor(model) {
        this.model = model;
    }

    async create(options) {
        return await this.model.create(options);
    }

    async findOne(criteria, projection) {
        return await this.model.findOne(criteria, projection);
    }

    async find(projection, sort) {
        return await this.model.find({}, projection).sort(sort);
    }
}

module.exports = {
    Factory,
};
