var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },
  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
}

const container = document.getElementById("data-container");
function createTree(container, data) {
  const elemUl = document.createElement('ul');
  if (Object.keys(data).length === 0) {
    return console.log("Object is empty");
  } else {
    for (let key in data) {
      const elemLi = document.createElement('li')
      elemLi.innerHTML = key;
      elemUl.append(elemLi);
      createTree(elemLi, data[key]);
    }
    container.append(elemUl);
  }
}

createTree(container, data);