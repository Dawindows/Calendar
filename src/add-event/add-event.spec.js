import fetchMock from 'jest-fetch-mock';
import { AddEvent } from './add-event';

const addEvent = new AddEvent();
fetchMock.enableMocks();

describe('test create event', () => {
  let form;
  let testEvent;

  beforeAll(() => {
    testEvent = [
      {
        eventName: 'test event',
        members: 'David',
        weekday: 'monday',
        time: '12',
        dataId: 'monday-12',
      },
    ];

    form = document.createElement('div');
    form.innerHTML = `
      <input id="event-name" class="input" type="text" value="test event"> 

      <select id="members" multiple size="4">
        <option selected value="David">David</option>
      </select>

      <select id="weekday">
        <option selected value="monday">Monday</option>
      </select>

      <select id="time">
        <option selected value="12">12:00</option>
      </select>
    `;
  });

  it('should get value in form and create event', async () => {
    const createEvent = await addEvent.addEvent(form);

    expect(createEvent).toBeInstanceOf(Object);
    expect(createEvent).toEqual({
      eventName: 'test event',
      members: 'David',
      weekday: 'monday',
      time: '12',
      dataId: 'monday-12',
    });
  });

  it('should check double date', async () => {
    const checkDate = await addEvent.checkDoubleDate(form, testEvent);

    expect(checkDate).toBeInstanceOf(Object);
    expect([checkDate]).toEqual(testEvent);
  });
});
