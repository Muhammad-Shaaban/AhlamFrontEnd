export interface Purchases {
  metadata: string;
  count: string;
  value: [
    id: number,
    NumberOfInterpreters?: number,
    Price?: number,
    Enabled?: boolean,
    CreationDate?: Date,
    LastModificationDate?: Date,
    CreatorId?: number,
    ModifierId?: number,
    AttachmentId?: number,
    CreatorName?: string
  ];
}
