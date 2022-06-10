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
    async Delete(projection) {
        return await this.model.findByIdAndDelete(projection);
    }
    async Update(projection, body) {
        return await this.model.findByIdAndUpdate(projection, body, {
            new: true,
            upsert: true,
        });
    }
}

module.exports = {
    Factory,
};
