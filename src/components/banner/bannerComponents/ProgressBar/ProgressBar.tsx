interface IProgressProps {
  bgcolor: string;
  progress: string;
  height: string;
  num: string;
}

const Progress_bar = ({ bgcolor, progress, height, num }: IProgressProps) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#3E3C41",
    //  borderRadius: 40,
  };

  //   const Childdiv = {
  //     height: "100%",
  //     width: `${progress}%`,
  //     backgroundColor: bgcolor,
  //     //  borderRadius: 40,
  //     textAlign: "right",
  //   };

  const progresstext = {
    padding: 10,
    color: "#fff",
    fontWeight: 700,
    fontSize: 30,
  };

  return (
    <div style={Parentdiv}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: bgcolor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={progresstext}>{`${num}`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
