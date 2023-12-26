import { LovelaceCardConfig } from "custom-card-helpers";

export const CUSTOM_CARD_ID: string = "power-distribution";

export function is_empty(value: string | undefined): boolean {
  return value === undefined || value == "";
}

export interface HasVisibility {
  _has_generation: boolean;
  _has_storage: boolean;
  _has_load_top: boolean;
  _has_load_bottom: boolean;
}

export interface PowerDistributionConfig extends LovelaceCardConfig {
  title: string;

  grid_to_load_power_id: string;
  generation_to_grid_power_id: string;
  generation_to_storage_power_id: string;
  generation_to_load_power_id: string;
  storage_to_load_power_id: string;
  storage_to_grid_power_id: string;
  load_top_power_id: string;
  load_bottom_power_id: string;

  grid_info_id: string;
  storage_info_id: string;
  load_info_id: string;
  generation_info_id: string;
  load_top_info_id: string;
  load_bottom_info_id: string;

  grid_title: string;
  generation_title: string;
  storage_title: string;
  load_title: string;
  load_top_title: string;
  load_bottom_title: string;

  grid_icon: string;
  generation_icon: string;
  storage_icon: string;
  load_icon: string;
  load_top_icon: string;
  load_bottom_icon: string;
}

export function set_visibility(vis: HasVisibility, config: any) {
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
