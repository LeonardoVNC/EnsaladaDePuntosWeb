export const post = async <T>(url: string, body: unknown): Promise<T> => {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error ?? 'Error desconocido')
    return data as T
}

export const get = async <T>(url: string): Promise<T> => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) throw new Error(data.error ?? 'Error desconocido')
    return data as T
}