import type { AvailableRouterMethod, NitroFetchRequest } from "nitropack";
import type { FetchContext, FetchOptions, FetchResponse } from "ofetch";

interface NitroFetchOptions<R extends NitroFetchRequest, M extends AvailableRouterMethod<R> = AvailableRouterMethod<R>> extends FetchOptions {
    method?: Uppercase<M> | M;
}

type backendResType = { onSuccess?: (responseData: any) => void, onError?: (responseData: any) => void };
export default function useForm<T>(body: T) {
    const data = computed(() => body);
    const form = reactive({
        ...data.value,
        processing: false,
        errors: {} as Record<keyof T, string>,
        reset() {
            Object.keys(data.value as Record<string, any>).forEach((key) => {
                // @ts-ignore
                form[key] = "";
                // @ts-ignore
                form.errors[key] = '';
            })
        },
        post: async (api: string, options?: NitroFetchOptions<any> & backendResType) => {
            await useSubmit(api, {
                ...options,
                body: data.value || {},
                onRequest() {
                    form.processing = true;
                    // @ts-ignore
                    form.errors = {};
                },
                onResponse(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
                    form.processing = false;
                    if (context.response.ok) {
                        // @ts-ignore
                        form.errors = {};
                        if (options) {
                            options['onSuccess'] ? options['onSuccess'](context.response._data) : null;
                        }
                    }
                },
                onResponseError({ response }) {
                    response._data.errors && Object.keys(response._data.errors).forEach((key) => {
                        // @ts-ignore
                        form.errors[key] = response._data.errors[key].toString();
                        if (options) {
                            options['onError'] ? options['onError'](response._data.errors) : null;
                        }
                    })
                }
            });
        }
    })

    Object.keys(data.value || {}).forEach((key) => {
        // @ts-ignore
        watch(() => form[key], (value) => {
            // @ts-ignore
            data.value[key] = value;
            // @ts-ignore
            form.errors[key] = '';
        })
    })
    return form;
}