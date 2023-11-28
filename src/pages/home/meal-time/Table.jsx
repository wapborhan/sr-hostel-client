const Table = () => {
  return (
    <table className="opening-hours table table-hover table-condensed borderless">
      <thead>
        <tr>
          <th colSpan="2" className="table-headline">
            <span>Opening hours</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Monday</th>
          <td>08:00 - 16:00</td>
        </tr>
        <tr>
          <th>Tuesday</th>
          <td>08:00 - 18:00</td>
        </tr>
        <tr>
          <th>Wednesday</th>
          <td>09:30 - 12:00</td>
        </tr>
        <tr>
          <th>Thursday</th>
          <td>08:00 - 18:00</td>
        </tr>
        <tr>
          <th>Friday</th>
          <td>10:00 - 16:00</td>
        </tr>
        <tr>
          <th>Saturday</th>
          <td>08:00 - 13:00</td>
        </tr>
        <tr>
          <th>Sunday</th>
          <td>closed</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
