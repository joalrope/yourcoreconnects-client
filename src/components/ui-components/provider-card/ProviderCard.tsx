import { Card, Col, Rate, Row, Tooltip, Typography } from "antd";

import { ILocation } from "../map/MapView";
import { UserTitle } from "./UserTitle";
import { useTranslation } from "react-i18next";

const { Meta } = Card;
const { Text, Title } = Typography;

const baseUrl = import.meta.env.VITE_URL_BASE;

export interface IDataProvider {
  id: string;
  services: string[];
  fullname?: string;
  email?: string;
  location?: ILocation;
  pictures: { profile: string };
  ratings?: number;
  small?: boolean;
}

export const ProviderCard = ({
  id,
  fullname,
  email,
  services,
  pictures,
  ratings,
  small = false,
}: IDataProvider) => {
  const { profile } = !small ? pictures : { profile: "" };
  const picture = `${baseUrl}/images/${id}/${profile}`;
  const { t } = useTranslation();

  const serv: string[] = [];

  !small &&
    services.map((service) => {
      serv.push(t(service.split("|").pop() as string));
    });

  const userServ = serv.join(", ");

  return (
    <Card
      hoverable
      style={{
        display: "flex",
        flexDirection: "column",
        height: small ? 200 : 420,
        maxWidth: "300px",
        minWidth: "200px",
        width: "100%",
      }}
      cover={
        !small && (
          <img
            alt={`Picture of ${fullname}`}
            src={small ? "/images/logo.png" : picture}
            height={240}
          />
        )
      }
    >
      <Row
        style={{
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Col>
          <Meta
            title={
              <UserTitle
                fullname={fullname}
                email={email}
                id={id}
                contact={small}
              />
            }
          />
        </Col>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Title level={5} style={{ height: 12, marginTop: 5 }}>
            {t("Services")}:{" "}
          </Title>
          <Tooltip placement="top" title={userServ}>
            <Text
              style={{
                display: "-webkit-box",
                height: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {userServ}
            </Text>
          </Tooltip>
        </Col>

        {ratings && <Rate disabled allowHalf defaultValue={ratings} />}
      </Row>
    </Card>
  );
};
