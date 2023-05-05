from jsonrpcserver import Success, method, serve
import math
from collections import defaultdict

@method
def floor(floorNum):
    return Success(math.floor(floorNum))

@method
def reverse(str):
    return Success(str[::-1])

@method
def validAnagram(str1, str2):
    hashmap1 = defaultdict(int)
    hashmap2 = defaultdict(int)
    if len(str1) == len(str2):
        for i in range(len(str1)):
            hashmap1[str1[i]] += 1
            hashmap2[str1[i]] += 1
        if hashmap1 == hashmap2: return Success(True)
    else: return Success(False)

if __name__ == "__main__":
    print("connecting...")
    serve(port=8000)
    