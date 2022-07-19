export type PropsDescription<T> = Partial<{ [K in keyof T]: T[K] [] }>;
type Keys<T> = keyof T;
type Values<T> = T[Keys<T>];
type PairKeyValue<T> = [Keys<PropsDescription<T>>, Values<PropsDescription<T>>];

export function getCartesianProduct<Props>(props: PropsDescription<Props>): Props [] {
    return (Object.entries(props) as PairKeyValue<Props>[]).reduce<Props []>(
        (accumulation, [nameProp, values = []]) => {
            const result: Props [] = [];

            accumulation.forEach((props: Props) => {
                values.forEach((value) => {
                    result.push({ ...props, [nameProp]: value });
                });
            });

            return result;
        },
        [{}] as any,
    );
}
