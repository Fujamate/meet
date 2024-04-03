const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Please enter a number";
      setErrorAlert(errorText);
    } else {
      setCurrentNOE(value);
      errorText = "";
      setErrorAlert(errorText);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        data-testid="numberOfEventsInput"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
