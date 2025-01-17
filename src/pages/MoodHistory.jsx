/* eslint-disable react/prop-types */


const MoodHistory = ({ moodData, deleteMood, setEditingMood, isDarkTheme }) => {
  console.log("object", moodData);

  const handleEditButtonClick = (date, mood, note ) => {
    window.scrollTo(0,0);
    setEditingMood({ date, mood, note });
  }

  return (
    <div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} p-4 rounded shadow mb-4`}>
      <h2 className="text-xl font-bold mb-2">Mood History</h2>
      <ul>
        {moodData?.length>0 ? moodData.map(({ date, mood, note }) => (
          <>
          <li key={date} className="flex justify-between items-center mb-2">
            <div>
              <span className="text-sm text-gray-400">{date}</span>
              <p className="text-xl">{mood} {note !== '' ? note : 'NA'}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditButtonClick( date, mood, note )}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMood(date)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
          <hr className="border-gray-300 my-2" />
          </>
        ))
      : <p className="text-center">No data available.</p>}
      </ul>
    </div>
  );
};

export default MoodHistory;
