function contador(inicial: number): () => number {
    return () => inicial++;
}

const c1 = contador(10)