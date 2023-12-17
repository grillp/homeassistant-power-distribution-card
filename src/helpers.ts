export function is_empty(value: string | undefined): boolean {
  return value === undefined || value == "";
}

export interface TeslaHasVisibility {
  _has_generation: boolean;
  _has_storage: boolean;
  _has_load_top: boolean;
  _has_load_bottom: boolean;
}

export function set_visibility(vis: TeslaHasVisibility, config: any) {
  vis._has_generation = !(
    is_empty(config.generation_to_grid_power_id) &&
    is_empty(config.generation_to_storage_power_id) &&
    is_empty(config.generation_to_load_power_id)
  );
  vis._has_storage = !(
    is_empty(config.storage_to_grid_power_id) &&
    is_empty(config.generation_to_storage_power_id) &&
    is_empty(config.storage_to_load_power_id)
  );
  vis._has_load_top = !is_empty(config.load_top_power_id);
  vis._has_load_bottom = !is_empty(config.load_bottom_power_id);
}
