import type { AvailableRouterMethod, NitroFetchRequest } from "nitropack";
import type { FetchContext, FetchOptions, FetchResponse } from "ofetch";

interface NitroFetchOptions<R extends NitroFetchRequest, M extends AvailableRouterMethod<R> = AvailableRouterMethod<R>> extends FetchOptions {
    method?: Uppercase<M> | M;
}

export default function useApi(apiEndpoint: string | Function, options?: {
    onSuccess?: (data: any) => void,
    onError?: (response: any) => void,
    onTransform?: (data: any) => any,
    processing?: boolean
}) {
    const runtime = useRuntimeConfig()
    const auth = useNuxtApp().$auth as any

    return useFetch(apiEndpoint as string, {
        baseURL: runtime.public.apiBase as string,
        server: false,
        headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            Authorization: `Bearer ${auth?.token}`,
            // "Content-Type": "application/json",
        },
        onRequest({ request }) {
            if (options) {
                options['processing'] = true;
                console.log(options['processing'])
            }
        },
        onResponseError({ response }) {
            if (options) {
                options['processing'] = false;
                options['onError'] ? options['onError'](response._data.errors) : null;
            }
        },
        onResponse(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
            if (context.response.ok) {
                if (options) {
                    options['onSuccess'] ? options['onSuccess'](context.response._data) : null;
                    options['processing'] = false;
                }
            }
        },
        transform(data: any) {
            if (options) {
                return options['onTransform'] ? options['onTransform'](data) : data;
            }
        },
        ...options
    })
}

export function useSubmit(apiEndpoint: string, options: NitroFetchOptions<any> = {}) {
    const runtime = useRuntimeConfig()
    return $fetch(apiEndpoint, {
        method: "POST",
        baseURL: runtime.public.apiBase as string,
        withCredentials: true,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // 'Content-Type': 'multipart/form-data'
        },
        ...options
    })
}