import React, { useEffect } from "react";
import ml5 from "ml5";
import { useState } from "react";

const Practice = (props) => {
  const options = {
    task: "classification",
    debug: true,
  };

  const trainingOptions = {
    epochs: 500,
    batchSize: 33,
  };

  //   const [data, setData] = useState([
  //     { r: 255, g: 0, b: 0, color: "red-ish" },
  //     { r: 254, g: 0, b: 0, color: "red-ish" },
  //     { r: 253, g: 0, b: 0, color: "red-ish" },
  //     { r: 0, g: 0, b: 255, color: "blue-ish" },
  //     { r: 0, g: 0, b: 254, color: "blue-ish" },
  //     { r: 0, g: 0, b: 253, color: "blue-ish" },
  //   ]);

  const data = [
    { r: 255, g: 0, b: 0, color: "red-ish" },
    { r: 250, g: 0, b: 0, color: "red-ish" },
    { r: 245, g: 0, b: 0, color: "red-ish" },
    { r: 0, g: 0, b: 255, color: "blue-ish" },
    { r: 0, g: 0, b: 250, color: "blue-ish" },
    { r: 0, g: 0, b: 245, color: "blue-ish" },
    { r: 0, g: 255, b: 0, color: "green-ish" },
    { r: 0, g: 250, b: 0, color: "green-ish" },
    { r: 0, g: 245, b: 0, color: "green-ish" },
  ];

  const nn = ml5.neuralNetwork(options);

  const AddDataToNeuralNetwork = () => {
    data.forEach((item) => {
      const inputs = {
        r: item.r,
        g: item.g,
        b: item.b,
      };
      const output = {
        color: item.color,
      };

      nn.addData(inputs, output);
    });
  };

  const Train = () => {
    AddDataToNeuralNetwork();
    // Normalize();
    nn.train(trainingOptions, whileTraining, finishedTraining);
  };

  const whileTraining = (epoch) => {
    console.log("Epoch: ", epoch);
  };

  const finishedTraining = () => {
    console.log("Finish");
  };

  const Normalize = () => {
    // nn.normalizeData();
  };

  const Predict = (input) => {
    nn.classify(input, handleResults);
  };

  const handleResults = (err, result) => {
    if (err) console.log("Error");
    else {
      console.log("Result: ", result);
    }
  };

  const init = () => {
    console.log("NN: ", nn);
  };

  useEffect(() => {
    init();
    return;
  }, []);

  return (
    <>
      <br />
      <div className="container">
        <button onClick={() => Train()} className="btn btn-primary">
          Train
        </button>
        <br />
        <button
          onClick={() => Predict({ r: 0, g: 0, b: 255 })}
          className="btn btn-success"
        >
          Predict
        </button>
      </div>
    </>
  );
};

export default Practice;
