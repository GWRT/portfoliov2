declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "@vue/runtime-dom" {
    interface HTMLAttributes {
        ref?: string;
    }
}

declare module "@vue/runtime-core" {
    interface AllowedComponentProps {
        ref?: string;
    }
}
