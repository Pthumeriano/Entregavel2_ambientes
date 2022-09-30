function fibonacci(n) {
    return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }

  function somatorio(conjuntoDeNumeros) {

    var soma = 0;
    for (var i = 0; i < conjuntoDeNumeros.length; i++) {
      soma += conjuntoDeNumeros[i];
    }
    return soma;

  }

  function ehPrimo(n) {

    for (i = n - 1; i > 1; i--) {
      if (n % i == 0) {
        return "Não primo";
      }
    }
    return "Primo";
  }

  function maximoDivisor(a, b) {
    mdc = 0;

    if (a < b) {
      aux = a;
      a = b;
      b = aux;
    }

    for (i = 1; i < a; i++) {
      if (a % i == 0 && b % i == 0) {
        mdc = i;
      }
    }

    return mdc;
  }

  function contagem() {
    var qtd = 0;

    var n = prompt("Digite a quantidade de termos: ")

    for (i = 0; i < n; i++) {
      temp = prompt("Digite o termo " + i);
      if (!(temp - Math.round(temp) == 0)) {
        qtd++;
      }
    }

    return qtd;
  }

  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
