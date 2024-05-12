function solution(n, control) {
    return control.split("")
                  .map(c => {
                        switch (c) {
                            case "w":
                                return 1;
                            case "s":
                                return -1;
                            case "d":
                                return 10;
                            case "a":
                                return -10;
                        }
                    })
                  .reduce((acc, cur) => acc + cur, n);
}