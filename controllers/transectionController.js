const transectionModel = require("../models/transectionModel")
const moment = require("moment")


const getALlTransection = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body
        const transection = await transectionModel.find({
            ...(frequency !== "custom"
                ? {
                    date: {
                        $gt: moment().subtract(Number(frequency), "d").toDate(),
                    },
                }
                : {
                    date: {
                        $gte: selectedDate[0],
                        $lte: selectedDate[1],
                    },
                }),
            userid: req.body.userid,
            ...(type !== "all" && { type }),

        })
        res.status(200).json(transection)

    } catch (error) {
        console.log(error)
        res.status(500).json(erorr);

    }


}


const deleteTransection = async (req, res) => {
    try {
        await transectionModel.findOneAndDelete({ _id: req.body.transacationId });
        res.status(200).send("Transaction Deleted!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const editTransection = async (req, res) => {
    try {
        await transectionModel.findOneAndUpdate(
            { _id: req.body.transacationId },
            req.body.payload
        );
        res.status(200).send("Edit Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


const addTransection = async (req, res) => {
    try {
        const newtransection = new transectionModel(req.body)
        await newtransection.save()
        res.status(201).send("transection Created")


    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }
}

module.exports = {
    getALlTransection, addTransection, editTransection,
    deleteTransection,
}