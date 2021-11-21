
```ts

// 새로운 배열로 리턴
concat(...items: ConcatArray<T>[]): T[];

concat(...items: (T | ConcatArray<T>)[]): T[];

// 문자열로 리턴
join(separator?: string): string; 



shift(): T | undefined;

slice(start?: number, end?: number): string[];

split(seperator: string | RegExp, limit?: number): string[];


```

```ts

// 기존의 배열을 변화시키는 Array.method

reverse():T[]; 


```
