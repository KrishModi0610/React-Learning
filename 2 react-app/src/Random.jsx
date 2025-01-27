function Random() {
    let number = Math.round(Math.random() * 100);

    return (
      <p style={{'background-color': '#775544'}}>The random number is {number}</p>
    );
}

export default Random;