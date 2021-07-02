const get = (model) => async (req, res) => {
    try {
        const data = await model.find().lean().exec();
        res.status(200).json({data});
    }
    catch (err) {
        console.log(err);
    }
};

const getById = (model) => async (req, res) => {
    try {
        const id = req.params.id;
        const data = await model.findById(id);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
};

const post = (model) => async (req, res) => {
    try {
        const body = req.body;
        const data = await model.create(body);
        res.status(201).json({data});
    }
    catch (err) {
        console.log(err);
    }
};

const deleteById = (model) => async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const data = await model.findByIdAndDelete(id);
        res.status(200).json("data deleted");
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = (model) => ({
    get: get(model),
    getById: getById(model),
    post: post(model),
    delete: deleteById(model)
})