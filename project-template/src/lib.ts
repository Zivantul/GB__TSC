export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast(message, action) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}

export function getDatesParameters(checkinDate: string, checkoutDate: string): string[] {
  let minDate: Date = new Date();

  let maxDate: Date = new Date(minDate.getFullYear(), minDate.getMonth() + 2, 0);

  let defaultMinDate: Date = new Date();
  defaultMinDate.setDate(defaultMinDate.getDate() + 1);

  let defaultMaxDate: Date = new Date();
  defaultMaxDate.setDate(defaultMinDate.getDate() + 2);

  let finalMinDate = getDateString(minDate);
  let finalMaxDate = getDateString(maxDate);
  let finalDefaultMinDate = getDateString(defaultMinDate);
  let finaldefaultMaxDate = getDateString(defaultMaxDate);

  if (checkinDate == '') {
    checkinDate = finalDefaultMinDate;
  }
  if (checkoutDate == '') {
    checkoutDate = finaldefaultMaxDate;
  }

  return [checkinDate, checkoutDate, finalMinDate, finalMaxDate]
}

export function getDateString(date: Date): string {
  const curDate = date.getDate();
  const curMonth = date.getMonth() + 1;
  const finYear = date.getFullYear();

  let finDate: string = '';
  let finMonth: string = '';

  if (curDate < 10) {
    finDate = '0' + curDate.toString();
  } else {
    finDate = curDate.toString();
  }

  if (curMonth < 10) {
    finMonth = '0' + curMonth.toString();
  } else {
    finMonth = curMonth.toString();
  }

  return `${finYear}-${finMonth}-${finDate}`;
}