package lida.javaBegginer.order_app.mapper;

import lida.javaBegginer.order_app.dto.OrderDTO;
import lida.javaBegginer.order_app.entity.OrderEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    OrderDTO toDTO(OrderEntity source);
    OrderEntity toEntity(OrderDTO source);
}
